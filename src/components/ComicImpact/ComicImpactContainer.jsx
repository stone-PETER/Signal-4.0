import { useComicImpact } from "./useComicImpact";
import ComicBubble from "./ComicBubble";

/**
 * ComicImpactContainer - Wrapper component that handles comic impact effects
 *
 * Usage:
 * <ComicImpactContainer>
 *   <div onClick={triggerImpact}>Click me for comic effect!</div>
 * </ComicImpactContainer>
 *
 * Or use the hook directly for more control:
 * const { impacts, triggerImpact } = useComicImpact();
 */
const ComicImpactContainer = ({ children, style = {} }) => {
  const { impacts, triggerImpact } = useComicImpact();

  return (
    <div
      style={{
        position: "relative",
        ...style,
      }}
      onClick={triggerImpact}
    >
      {children}

      {/* Render all active impact bubbles */}
      {impacts.map((impact) => (
        <ComicBubble
          key={impact.id}
          x={impact.x}
          y={impact.y}
          word={impact.word}
          rotation={impact.rotation}
        />
      ))}
    </div>
  );
};

export default ComicImpactContainer;
