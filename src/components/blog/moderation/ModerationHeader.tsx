import { Filter, Plus, Search } from 'lucide-react';

export default function ModerationHeader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-text-primary">
            Content Moderation
          </h1>
          <p className="text-sm text-text-secondary">
            Review and moderate blog posts, comments, and reviews submitted by caterers
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors duration-fast shadow-elevation-1">
            <Filter className="w-4 h-4" strokeWidth={1.5} />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent-foreground bg-accent border border-accent rounded-lg hover:bg-accent-hover transition-colors duration-fast shadow-elevation-2">
            <Plus className="w-4 h-4" strokeWidth={1.5} />
            Create New
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search posts, caterers, or categories..."
          className="w-full pl-10 pr-4 py-2 text-sm bg-input border border-input-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:border-input-focus focus:ring-2 focus:ring-accent/20 dark:focus:ring-accent/30 transition-all duration-fast shadow-input outline-none"
        />
      </div>
    </div>
  );
}
