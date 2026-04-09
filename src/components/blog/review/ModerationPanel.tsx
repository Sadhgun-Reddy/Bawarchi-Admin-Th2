import { useState } from 'react';
import { ModerationPanelProps } from '../../../types/blogReview.types';

export default function ModerationPanel({
  checks,
  aiAnalysis,
  onCheckChange,
  onApprove,
  onRequestChanges,
  onReject,
}: ModerationPanelProps) {
  const [notes, setNotes] = useState('');
  const [localChecks, setLocalChecks] = useState(checks);

  const handleCheckToggle = (id: string) => {
    setLocalChecks(prev =>
      prev.map(check =>
        check.id === id ? { ...check, isChecked: !check.isChecked } : check
      )
    );
    onCheckChange(id);
  };

  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24">
      {/* Moderation Checklist */}
      <div className="p-4 bg-surface border border-border rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Moderation Checklist
        </h3>
        <div className="flex flex-col gap-3">
          {localChecks.map((check) => (
            <label
              key={check.id}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={check.isChecked}
                onChange={() => handleCheckToggle(check.id)}
                className="mt-0.5 w-4 h-4 border border-border rounded"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-text-primary group-hover:text-text-secondary transition-colors">
                  {check.label}
                </span>
                <span className="text-xs text-text-tertiary">
                  {check.description}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* AI Analysis */}
      <div className="p-4 bg-surface border border-border rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          AI Analysis
        </h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Sentiment Score</span>
            <span className="text-sm font-semibold text-text-primary">
              {(aiAnalysis.sentimentScore * 100).toFixed(0)}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Plagiarism Check</span>
            <span className="text-sm font-semibold text-text-primary">
              {aiAnalysis.plagiarismCheck.status === 'clear' ? '✓ Clear' : '⚠ Warning'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Similarity</span>
            <span className="text-sm font-semibold text-text-primary">
              {aiAnalysis.plagiarismCheck.similarity}%
            </span>
          </div>
        </div>
      </div>

      {/* Reviewer Notes */}
      <div className="p-4 bg-surface border border-border rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-3">
          Reviewer Notes
        </h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add feedback for the author..."
          rows={4}
          className="w-full px-3 py-2 text-sm bg-surface-secondary border border-border rounded text-text-primary placeholder:text-text-tertiary resize-none"
        />
      </div>

      {/* Decision Actions */}
      <div className="flex flex-col gap-2 p-4 bg-surface border border-border rounded-lg">
        <button
          onClick={onApprove}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors"
        >
          Approve & Publish
        </button>
        <button
          onClick={() => onRequestChanges(notes)}
          className="w-full px-4 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors"
        >
          Request Changes
        </button>
        <button
          onClick={() => onReject(notes)}
          className="w-full px-4 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-surface-secondary transition-colors"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
