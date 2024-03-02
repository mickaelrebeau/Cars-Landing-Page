import {
	bradley,
	eric,
	mercedes,
	mercedes2,
	mustang,
	vigne,
} from "@/assets/images";
import { chevrolet } from "@/assets/videos";

export const Gallery = () => {
	return (
		<div
			id="Gallery"
			className="mx-auto w-[80%] h-auto px-8 py-12 bg-gray-950 flex flex-col items-center gap-8 rounded-md"
		>
			<div className="grid grid-cols-7 gap-4">
				<img
					src={mercedes}
					className="w-full h-auto max-h-[415px] object-cover rounded-md col-span-2"
				/>
				<img
					src={bradley}
					className="w-full h-auto max-h-[415px] object-cover rounded-md col-span-2"
				/>
				<img
					src={eric}
					className="w-auto h-auto max-h-[415px] object-cover rounded-md col-span-3"
				/>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<video
					autoPlay
					loop
					muted
					className="w-full h-auto max-h-[500px] object-cover rounded-md  col-span-2"
				>
					<source src={chevrolet} type="video/mp4" />
				</video>
				<img
					src={mercedes2}
					className="w-[600px] h-auto max-h-[500px] object-cover rounded-md"
				/>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<img
					src={vigne}
					className="w-[800px] h-auto max-h-[500px] object-cover rounded-md"
				/>
				<img
					src={mustang}
					className="w-full h-auto max-h-[500px] object-cover rounded-md col-span-2"
				/>
			</div>
		</div>
	);
};
