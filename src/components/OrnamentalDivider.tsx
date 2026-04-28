interface OrnamentalDividerProps {
  text: string;
}

export default function OrnamentalDivider({ text }: OrnamentalDividerProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-[18px] my-[52px] sm:my-[72px]">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="flex flex-col items-center gap-[7px]">
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-secondary opacity-50" />
          <div className="w-[7px] h-[7px] bg-primary rotate-45 opacity-40" />
          <div className="w-[5px] h-[5px] rounded-full bg-secondary opacity-50" />
        </div>
        <div className="font-[var(--font-head)] text-sm sm:text-[1.05rem] font-semibold text-primary tracking-[0.1em] py-2 px-5 sm:px-[26px] rounded-full bg-primary/[0.06] border-[1.5px] border-primary/[0.14] whitespace-nowrap">
          {text}
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-secondary opacity-50" />
          <div className="w-[7px] h-[7px] bg-primary rotate-45 opacity-40" />
          <div className="w-[5px] h-[5px] rounded-full bg-secondary opacity-50" />
        </div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </div>
  );
}
