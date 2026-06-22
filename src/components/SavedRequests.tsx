import { useState } from 'react';
import type { DragEvent } from 'react';
import type { ApiEndpoint, SavedFolder, SavedRequest } from '../types/api';
import { NameModal } from './NameModal';

type DropLocation = { folderId?: string; index?: number };

type ModalState =
  | { type: 'new-folder' }
  | { type: 'rename-folder'; folder: SavedFolder }
  | { type: 'rename-request'; request: SavedRequest }
  | null;

interface SavedRequestsProps {
  requests: SavedRequest[];
  folders: SavedFolder[];
  endpoints?: ApiEndpoint[];
  onUse: (request: SavedRequest) => void;
  onRun: (request: SavedRequest) => void;
  onDelete: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onDuplicate: (id: string) => void;
  onCreateFolder: (name: string) => void;
  onRenameFolder: (id: string, name: string) => void;
  onDeleteFolder: (id: string) => void;
  onMoveRequest: (id: string, destination: DropLocation) => void;
}

function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(ts).toLocaleDateString();
}

const METHOD_STYLES: Record<string, string> = {
  POST:   'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20',
  GET:    'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20',
  PUT:    'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20',
  DELETE: 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20',
  PATCH:  'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-500/20',
};

export const SavedRequests = ({
  requests,
  folders,
  endpoints = [],
  onUse,
  onRun,
  onDelete,
  onRename,
  onDuplicate,
  onCreateFolder,
  onRenameFolder,
  onDeleteFolder,
  onMoveRequest,
}: SavedRequestsProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [modal, setModal] = useState<ModalState>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [armDelete, setArmDelete] = useState<string | null>(null);
  const [armDeleteFolder, setArmDeleteFolder] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const getEndpoint = (endpointId: string) =>
    endpoints.find((e) => e.id === endpointId);

  const toggleFolder = (id: string) =>
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const grouped = folders.map((folder) => ({
    folder,
    items: requests.filter((r) => r.folderId === folder.id),
  }));
  const unsorted = requests.filter((r) => !r.folderId);

  const onDragStart = (e: DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };
  const onDrop = (e: DragEvent<HTMLDivElement>, dest: DropLocation) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) onMoveRequest(id, dest);
  };
  const allowDrop = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  const RequestCard = ({ request, dest }: { request: SavedRequest; dest: DropLocation }) => {
    const ep = getEndpoint(request.endpointId);
    const method = ep?.method ?? '';
    const isArmed = armDelete === request.id;
    const isMenuOpen = openMenu === request.id;

    return (
      <div
        draggable
        onDragStart={(e) => onDragStart(e, request.id)}
        onDragOver={allowDrop}
        onDrop={(e) => onDrop(e, dest)}
        className="group relative flex items-start gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm p-3 transition-all duration-150 cursor-grab active:cursor-grabbing"
      >
        {/* Drag handle */}
        <div className="mt-0.5 shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-slate-400 dark:group-hover:text-slate-500 transition-colors">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-16a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          {/* Method + name */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {method && (
              <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded border ${METHOD_STYLES[method] ?? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'}`}>
                {method}
              </span>
            )}
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
              {request.name}
            </span>
          </div>

          {/* Metadata chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              {relativeTime(request.createdAt)}
            </span>
            {request.environmentId && (
              <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                {request.environmentId.replace('zuora-', '').replace('-', ' ')}
              </span>
            )}
            {request.pathParams && Object.keys(request.pathParams).length > 0 && (
              <span className="text-[10px] bg-zuora-50 dark:bg-zuora-500/10 text-zuora-600 dark:text-zuora-400 px-1.5 py-0.5 rounded-full border border-zuora-200 dark:border-zuora-500/20">
                {Object.keys(request.pathParams).length} path
              </span>
            )}
            {request.queryParams && Object.keys(request.queryParams).length > 0 && (
              <span className="text-[10px] bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 px-1.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-500/20">
                {Object.keys(request.queryParams).length} query
              </span>
            )}
          </div>
        </div>

        {/* Action buttons — always visible on the right */}
        <div className="shrink-0 flex items-center gap-1">
          {/* Load */}
          <button
            type="button"
            onClick={() => onUse(request)}
            title="Load into form"
            className="p-1.5 rounded-lg text-slate-400 hover:text-zuora-600 dark:hover:text-zuora-400 hover:bg-zuora-50 dark:hover:bg-zuora-500/10 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>

          {/* Run */}
          <button
            type="button"
            onClick={() => onRun(request)}
            title="Run request"
            className="p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          {/* ⋯ menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(isMenuOpen ? null : request.id)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-1 z-30 w-36 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => { setModal({ type: 'rename-request', request }); setOpenMenu(null); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.5-6.5a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414V18h1.586a2 2 0 001.414-.586l.364-.364" />
                  </svg>
                  Rename
                </button>
                <button
                  type="button"
                  onClick={() => { onDuplicate(request.id); setOpenMenu(null); }}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Duplicate
                </button>
                <div className="border-t border-slate-100 dark:border-slate-800" />
                {isArmed ? (
                  <button
                    type="button"
                    onClick={() => { onDelete(request.id); setArmDelete(null); setOpenMenu(null); }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Confirm delete
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => { setArmDelete(request.id); }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const FolderBlock = ({ folder, items }: { folder: SavedFolder; items: SavedRequest[] }) => {
    const open = expandedFolders.has(folder.id);
    const isFolderArmed = armDeleteFolder === folder.id;

    return (
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={() => toggleFolder(folder.id)}
            className="flex items-center gap-2 flex-1 min-w-0 text-left group"
          >
            <svg
              className={`w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${open ? 'rotate-0' : '-rotate-90'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <svg className="w-4 h-4 shrink-0 text-amber-500 dark:text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z" />
            </svg>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {folder.name}
            </span>
            <span className="shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
              {items.length}
            </span>
          </button>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setModal({ type: 'rename-folder', folder }); }}
              title="Rename folder"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.5-6.5a2 2 0 012.828 2.828L11.828 15.828A2 2 0 0110 16.414V18h1.586a2 2 0 001.414-.586l.364-.364" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isFolderArmed) { onDeleteFolder(folder.id); setArmDeleteFolder(null); }
                else setArmDeleteFolder(folder.id);
              }}
              title={isFolderArmed ? 'Confirm delete' : 'Delete folder'}
              className={`p-1.5 rounded-lg transition-colors ${
                isFolderArmed
                  ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10'
                  : 'text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            className="p-3 space-y-2 bg-white dark:bg-slate-900"
            onDragOver={allowDrop}
            onDrop={(e) => onDrop(e, { folderId: folder.id, index: items.length })}
          >
            {items.length === 0 ? (
              <div className="flex items-center justify-center py-5 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-xs text-slate-400 dark:text-slate-500">Drag requests here</p>
              </div>
            ) : (
              items.map((req, i) => (
                <RequestCard key={req.id} request={req} dest={{ folderId: folder.id, index: i }} />
              ))
            )}
          </div>
        )}
      </div>
    );
  };

  const total = requests.length;

  return (
    <>
      {/* Modals */}
      {modal?.type === 'new-folder' && (
        <NameModal
          title="New collection folder"
          label="Folder name"
          confirmLabel="Create"
          onConfirm={(name) => { onCreateFolder(name); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}
      {modal?.type === 'rename-folder' && (
        <NameModal
          title="Rename folder"
          label="Folder name"
          initialValue={modal.folder.name}
          confirmLabel="Rename"
          onConfirm={(name) => { onRenameFolder(modal.folder.id, name); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}
      {modal?.type === 'rename-request' && (
        <NameModal
          title="Rename request"
          label="Request name"
          initialValue={modal.request.name}
          confirmLabel="Rename"
          onConfirm={(name) => { onRename(modal.request.id, name); setModal(null); }}
          onCancel={() => setModal(null)}
        />
      )}

      <div
        className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200 overflow-hidden"
        onClick={() => { setOpenMenu(null); setArmDelete(null); setArmDeleteFolder(null); }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsExpanded((v) => !v); }}
            className="flex items-center gap-2 min-w-0 flex-1 text-left group"
          >
            <svg className="w-5 h-5 shrink-0 text-zuora-500 dark:text-zuora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <h3 className="text-base font-semibold text-slate-800 dark:text-white">Collections</h3>
            {total > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-zuora-50 dark:bg-zuora-500/10 text-zuora-600 dark:text-zuora-400 border border-zuora-200 dark:border-zuora-500/20">
                {total}
              </span>
            )}
            <svg
              className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setModal({ type: 'new-folder' }); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-zuora-600 dark:text-zuora-400 bg-zuora-50 dark:bg-zuora-500/10 border border-zuora-200 dark:border-zuora-500/20 hover:bg-zuora-100 dark:hover:bg-zuora-500/20 transition-colors shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Folder
          </button>
        </div>

        {/* Body */}
        {isExpanded && (
          <div className="p-4">
            {total === 0 && folders.length === 0 ? (
              /* Empty state */
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">No saved requests yet</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 max-w-[200px] leading-relaxed">
                  Fill in the form and hit <span className="font-medium text-slate-500 dark:text-slate-400">Save Request</span> to build your collection.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[480px] overflow-y-auto pr-0.5">
                {grouped.map(({ folder, items }) => (
                  <FolderBlock key={folder.id} folder={folder} items={items} />
                ))}
                {unsorted.length > 0 && (
                  <div
                    className="space-y-2"
                    onDragOver={allowDrop}
                    onDrop={(e) => onDrop(e, { folderId: undefined, index: unsorted.length })}
                  >
                    {folders.length > 0 && (
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Unsorted</span>
                        <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                      </div>
                    )}
                    {unsorted.map((req, i) => (
                      <RequestCard key={req.id} request={req} dest={{ folderId: undefined, index: i }} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
