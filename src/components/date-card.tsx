export const Card = ({
	date,
	description,
	isLeft,
	addClass,
}: {
	date: string;
	description: string;
	isLeft: boolean;
	addClass?: string;
}) => {
	const className = `p-8 w-[400px] h-[300px] flex flex-col items-center justify-center gap-10 border boerder-slate-400 rounded-xl bg-black/50 backdrop-blur-md relative ${addClass}`;

	return (
		<div className={className}>
			<h2 className="text-8xl font-bold text-center font-amiri">{date}</h2>
			<p className="text-2xl font-raleway">{description}</p>
			<span
				className={
					isLeft
						? "w-0 h-0 border-t-[15px] border-t-transparent border-r-[25px] border-r-slate-600 border-b-[15px] border-b-transparent absolute -left-[80px]"
						: "w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-slate-600 border-b-[15px] border-b-transparent absolute -right-[80px]"
				}
			></span>
		</div>
	);
};
