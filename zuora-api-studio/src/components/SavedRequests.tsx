import type { DragEvent } from 'react';
import type { SavedFolder, SavedRequest } from '../types/api';

type DropLocation = {
  folderId?: string;
  index?: number;
};

interface SavedRequestsProps {
  requests: SavedRequest[];
  folders: SavedFolder[];
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

export const SavedRequests = ({
  requests,
  folders,
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
  const grouped = folders.map((folder) => ({
    folder,
    items: requests.filter((request) => request.folderId === folder.id),
  }));

  const unsorted = requests.filter((request) => !request.folderId);

  const handleNewFolder = () => {
    const name = window.prompt('Folder name:');
    if (!name) return;
    onCreateFolder(name.trim());
  };

  const handleRenameRequest = (request: SavedRequest) => {
    const name = window.prompt('Rename request:', request.name);
    if (!name) return;
    onRename(request.id, name.trim());
  };

  const handleRenameFolder = (folder: SavedFolder) => {
    const name = window.prompt('Rename folder:', folder.name);
    if (!name) return;
    onRenameFolder(folder.id, name.trim());
  };

  const onDragStart = (event: DragEvent<HTMLDivElement>, requestId: string) => {
    event.dataTransfer.setData('text/plain', requestId);
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDrop = (event: DragEvent<HTMLDivElement>, destination: DropLocation) => {
    event.preventDefault();
    const requestId = event.dataTransfer.getData('text/plain');
    if (!requestId) return;
    onMoveRequest(requestId, destination);
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderRequestCard = (request: SavedRequest, destination: DropLocation) => (
    <div
      key={request.id}
      draggable
      onDragStart={(event) => onDragStart(event, request.id)}
      onDragOver={allowDrop}
      onDrop={(event) => onDrop(event, destination)}
      className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50 dark:bg-slate-950/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {request.name}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {new Date(request.createdAt).toLocaleString()}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onUse(request)}
            className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300"
          >
            Use
          </button>
          <button
            type="button"
            onClick={() => onRun(request)}
            className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
          >
            Run
          </button>
          <button
            type="button"
            onClick={() => handleRenameRequest(request)}
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
          >
            Rename
          </button>
          <button
            type="button"
            onClick={() => onDuplicate(request.id)}
            className="text-xs font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300"
          >
            Duplicate
          </button>
          <button
            type="button"
            onClick={() => onDelete(request.id)}
            className="text-xs font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-3 text-xs font-mono text-slate-600 dark:text-slate-400 break-all">
        {request.endpointId}
      </div>
    </div>
  );

  if (!requests.length && !folders.length) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Saved Requests</h3>
          <button
            type="button"
            onClick={handleNewFolder}
            className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300"
          >
            + New Folder
          </button>
        </div>
        <div className="text-sm text-slate-500">No saved requests yet.</div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Saved Requests</h3>
        <button
          type="button"
          onClick={handleNewFolder}
          className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300"
        >
          + New Folder
        </button>
      </div>
      <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
        {grouped.map(({ folder, items }) => (
          <div key={folder.id} className="border border-slate-200 dark:border-slate-800 rounded-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-950/60">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {folder.name}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleRenameFolder(folder)}
                  className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100"
                >
                  Rename Folder
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteFolder(folder.id)}
                  className="text-xs font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300"
                >
                  Delete Folder
                </button>
              </div>
            </div>
            <div
              className="space-y-3 p-4"
              onDragOver={allowDrop}
              onDrop={(event) => onDrop(event, { folderId: folder.id, index: items.length })}
            >
              {items.length === 0 && (
                <div className="text-xs text-slate-500">Drag a request here.</div>
              )}
              {items.map((request, index) =>
                renderRequestCard(request, { folderId: folder.id, index })
              )}
            </div>
          </div>
        ))}

        <div className="border border-dashed border-slate-200 dark:border-slate-700 rounded-lg">
          <div className="px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            Unsorted
          </div>
          <div
            className="space-y-3 p-4"
            onDragOver={allowDrop}
            onDrop={(event) => onDrop(event, { folderId: undefined, index: unsorted.length })}
          >
            {unsorted.length === 0 && (
              <div className="text-xs text-slate-500">Drop here to unassign from a folder.</div>
            )}
            {unsorted.map((request, index) =>
              renderRequestCard(request, { folderId: undefined, index })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
