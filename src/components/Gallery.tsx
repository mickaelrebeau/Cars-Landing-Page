import { bradley, eric, mercedes, mustang, vigne } from "@/assets/images";
import { chevrolet } from "@/assets/videos";

export const Gallery = () => {
	return (
		<div id="Gallery" className="w-full h-auto px-8 py-12 bg-black flex flex-col items-center gap-8">
			<div className="flex gap-4">
				<img src={mercedes} className="w-[500px] h-[500px] object-cover" />
				<img src={bradley} className="w-[500px] h-[500px] object-cover" />
				<img src={eric} className="w-[800px] h-[500px] object-cover" />
			</div>
			<div className="flex gap-4">
				<video
					autoPlay
					loop
					muted
					className="w-[1200px] h-[600px] object-cover"
				>
					<source src={chevrolet} type="video/mp4" />
				</video>
				<img src={mercedes} className="w-[600px] h-[600px] object-cover" />
			</div>
			<div className="flex gap-4">
				<img src={vigne} className="w-[800px] h-[500px] object-cover" />
				<img src={mustang} className="w-[1000px] h-[500px] object-cover" />
			</div>
		</div>
	);
};
