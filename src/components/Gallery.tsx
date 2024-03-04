import {
	bradley,
	eric,
	mercedes,
	mercedes2,
	mustang,
	vigne,
} from "@/assets/images";
import { chevrolet } from "@/assets/videos";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

export const Gallery = () => {
	return (
		<motion.section
			variants={staggerContainer(0.5, 0.5)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="Gallery"
			className="mx-auto w-[80%] h-auto px-8 py-12 bg-black flex flex-col items-center gap-4 rounded-md"
		>
			<motion.div className="grid grid-cols-7 gap-4">
				<motion.div
					variants={fadeIn("", "", 0.1, 1)}
					className="w-full h-auto max-h-[415px] col-span-2"
				>
					<img
						src={mercedes}
						className="w-full h-auto max-h-[415px] object-cover rounded-md"
					/>
				</motion.div>
				<motion.div
					variants={fadeIn("", "", 0.2, 1)}
					className="w-full h-auto max-h-[415px] col-span-2"
				>
					<img
						src={bradley}
						className="w-full h-auto max-h-[415px] object-cover rounded-md"
					/>
				</motion.div>
				<motion.div
					variants={fadeIn("", "", 0.3, 1)}
					className="w-full h-auto max-h-[415px] col-span-3"
				>
					<img
						src={eric}
						className="w-auto h-auto max-h-[415px] object-cover rounded-md"
					/>
				</motion.div>
			</motion.div>
			<motion.div className="grid grid-cols-3 gap-4">
				<motion.div
					variants={fadeIn("", "", 0.4, 1)}
					className="w-full h-auto max-h-[500px] rounded-md col-span-2"
				>
					<video
						autoPlay
						loop
						muted
						className="w-full h-auto max-h-[500px] object-cover rounded-md"
					>
						<source src={chevrolet} type="video/mp4" />
					</video>
				</motion.div>
				<motion.div
					variants={fadeIn("", "", 0.5, 1)}
					className="w-full h-auto max-h-[500px] rounded-md"
				>
					<img
						src={mercedes2}
						className="w-[600px] h-auto max-h-[500px] object-cover rounded-md"
					/>
				</motion.div>
			</motion.div>
			<motion.div className="grid grid-cols-3 gap-4">
				<motion.div
					variants={fadeIn("", "", 0.6, 1)}
					className="w-full h-auto max-h-[500px]"
				>
					<img
						src={vigne}
						className="w-[500px] h-auto object-cover rounded-md"
					/>
				</motion.div>
				<motion.div
					variants={fadeIn("", "", 0.7, 1)}
					className="w-full h-auto max-h-[500px] rounded-md col-span-2"
				>
					<img
						src={mustang}
						className="w-[1200px] h-auto object-cover rounded-md"
					/>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};
