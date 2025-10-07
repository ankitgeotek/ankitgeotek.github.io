import { SvgIcon, SvgIconProps } from '@mui/material';

// Generic function to create an emoji icon component
export const createEmojiIcon = (emoji: string) => {
  const EmojiIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
      <text 
        x="50%" 
        y="50%" 
        textAnchor="middle" 
        dominantBaseline="central" 
        fontSize="16"
      >
        {emoji}
      </text>
    </SvgIcon>
  );
  
  return EmojiIcon;
};

// Pre-defined emoji icons you can use
export const HuggingFaceIcon = createEmojiIcon('🤗');
export const FireIcon = createEmojiIcon('🔥');
export const RocketIcon = createEmojiIcon('🚀');
export const BrainIcon = createEmojiIcon('🧠');
export const LightningIcon = createEmojiIcon('⚡');
export const StarIcon = createEmojiIcon('⭐');
export const ChartIcon = createEmojiIcon('📊');
export const BookIcon = createEmojiIcon('📚');
export const GearIcon = createEmojiIcon('⚙️');
export const DatabaseIcon = createEmojiIcon('💾');
export const CloudEmojiIcon = createEmojiIcon('☁️');
export const LinkEmojiIcon = createEmojiIcon('🔗');
export const TreeIcon = createEmojiIcon('🌲');
export const GraphIcon = createEmojiIcon('📈');