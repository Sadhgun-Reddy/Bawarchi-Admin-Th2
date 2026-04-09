import { ArticleBodyProps } from '../../../types/blogReview.types';

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-surface border border-border rounded-lg">
      {/* Hero Image */}
      {content.heroImage && (
        <div className="w-full h-64 bg-surface-secondary border border-border rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-text-tertiary text-sm">
            Hero Image Placeholder
          </div>
        </div>
      )}
      
      {/* Introduction */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-text-primary leading-relaxed">
          {content.introduction}
        </p>
      </div>
      
      {/* Ingredients */}
      {content.ingredients && content.ingredients.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-text-primary">
            Key Ingredients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {content.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center border border-border rounded text-xs text-text-tertiary">
                  ✓
                </span>
                <span className="text-sm text-text-primary">{ingredient}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Instructions */}
      {content.instructions && content.instructions.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-text-primary">
            Instructions
          </h3>
          <ol className="flex flex-col gap-3">
            {content.instructions.map((instruction, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-surface-secondary border border-border rounded-full text-xs font-semibold text-text-primary">
                  {index + 1}
                </span>
                <span className="text-sm text-text-primary pt-0.5">
                  {instruction}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
      
      {/* Chef's Tip */}
      {content.chefTip && (
        <div className="p-4 bg-surface-secondary border border-border rounded-lg">
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-text-primary">
              💡 Chef's Tip
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {content.chefTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
