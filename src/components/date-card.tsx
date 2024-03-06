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
	const className = `p-8 w-[400px] h-[300px] flex flex-col items-center justify-center gap-10 border boerder-slate-400 rounded-xl bg-black relative ${addClass}`;

	return (
		<div className={className}>
			<h2 className="text-xl font-bold text-center">{date}</h2>
			<p className="text-lg">{description}</p>
			<span
				className={
					isLeft
						? "w-0 h-0 border-t-[25px] border-t-transparent border-r-[40px] border-r-slate-800 border-b-[25px] border-b-transparent absolute -left-[80px]"
						: "w-0 h-0 border-t-[25px] border-t-transparent border-l-[40px] border-l-slate-800 border-b-[25px] border-b-transparent absolute -right-[80px]"
				}
			></span>
		</div>
	);
};
