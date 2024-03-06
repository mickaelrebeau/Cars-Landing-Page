import { cobra } from "@/assets/images";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Zoom = () => {
	const container = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const translateY = useTransform(scrollYProgress, [0, 8], ["0%", "-100%"]);

	return (
		<section
			ref={container}
			id="Cobra"
			className="w-full h-[300vh] bg-black relative"
		>
			<div className="w-full h-[100vh] sticky top-0 overflow-hidden">
				<motion.div
					className="w-full h-full flex flex-col items-center justify-center absolute top-0"
					style={{ scale }}
				>
					<img
						src={cobra}
						className="w-[500px] h-auto object-cover rounded-md"
					/>
				</motion.div>
			</div>
			<motion.div
				style={{
					translateY: translateY,
				}}
				className="w-full h-[100vh] sticky top-0 flex flex-col justify-end gap-8"
			>
				<div className="p-8 mx-auto w-[60%] h-auto flex flex-col items-center justify-center gap-10 bg-black/50 rounded-md backdrop-blur-sm font-raleway">
					<h2 className="text-3xl font-bold font-amiri">
						Cobra Shelby : L'Élégance Féline de la Puissance Automobile
					</h2>
					<p className="text-xl">
						La Cobra Shelby, création audacieuse de Carroll Shelby, incarne la
						fusion parfaite entre puissance brute et élégance féline. Son design
						aérodynamique, lignes élégantes et châssis léger promettent une
						agilité exceptionnelle. Arborant le logo du cobra, elle affiche son
						ADN sportif et des racines de compétition.
					</p>
					<p className="text-xl">
						Sous le capot, le rugissement distinctif du moteur V8 Shelby délivre
						une puissance vibrante. L'intérieur raffiné marie confort et
						fonctionnalité. De la Cobra 427 à la Shelby GT500, chaque modèle
						perpétue l'héritage d'excellence.
					</p>
					<p className="text-xl">
						Sur piste ou route ouverte, la Cobra Shelby continue de captiver,
						une icône automobile transcendant les époques. Bienvenue dans son
						univers enivrant, où la passion de la conduite rencontre l'élégance
						brute de la puissance automobile.
					</p>
				</div>
			</motion.div>
		</section>
	);
};
