import { staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

export const Home = () => {
	return (
		<motion.section
			className="w-full h-screen flex flex-col items-center justify-center gap-10"
			variants={staggerContainer(0.5, 0.5)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.h2
				className="mb-12 text-8xl font-bold text-center"
				variants={textVariant(0.1)}
			>
				Découvrez l'Élégance Intemporelle des Voitures Vintage
			</motion.h2>
			<motion.p className="text-3xl text-center"
				variants={textVariant(0.3)}
			>
				Exploration passionnante à travers l'histoire automobile pour les
				amateurs de charme rétro et de performances classiques.
			</motion.p>
		</motion.section>
	);
};
