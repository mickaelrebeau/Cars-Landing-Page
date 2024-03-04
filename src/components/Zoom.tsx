import { cobra } from "@/assets/images";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export const Zoom = () => {
	const container = useRef<HTMLDivElement>(null);
	const [isComplete, setIsComplete] = useState(false);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

	const handleAnimationComplete = () => {
		setIsComplete(true);
	};

	return (
		<section ref={container} className="w-full h-[300vh] bg-black relative">
			<div className="w-full h-[100vh] sticky top-0">
				<motion.div
					className="w-full h-full flex items-center justify-center absolute top-0"
					style={{ scale }}
					onAnimationComplete={handleAnimationComplete}
				>
					<img
						src={cobra}
						className="w-[500px] h-auto object-cover rounded-md"
					/>
				</motion.div>
			</div>
			{isComplete && (
				<div className="w-full h-[100vh] sticky top-0 bg-black">
					<div className="mx-auto w-[80%] h-full flex flex-col items-center justify-center gap-4">
						<h2>Cobra Shelby : L'Élégance Féline de la Puissance Automobile</h2>
						<p className="text-xl">
							Plongez dans l'univers audacieux de la Cobra Shelby, une icône
							intemporelle qui incarne la fusion parfaite entre la puissance
							brute et l'élégance féline. Conçue par le légendaire Carroll
							Shelby, cette supercar emblématique incarne l'esprit indomptable
							de l'ingénierie automobile américaine.
						</p>
						<p className="text-xl">
							Dotée d'un design aérodynamique saisissant, la Cobra Shelby séduit
							dès le premier regard. Ses lignes élégantes et ses courbes
							sculpturales soulignent son caractère racé, tandis que son châssis
							léger promet une agilité exceptionnelle sur la route. Arborant le
							logo emblématique du cobra, cette voiture ne cache pas son ADN
							sportif et ses racines de compétition.
						</p>
						<p className="text-xl">
							Sous le capot, le rugissement distinctif du moteur V8 Shelby
							résonne, délivrant une puissance qui fait vibrer l'âme. Chaque
							modèle incarne la performance pure, offrant des performances sur
							route inégalées. De la Cobra 427 emblématique à la plus récente
							Shelby GT500, chaque incarnation de la Cobra perpétue l'héritage
							d'excellence de Shelby.
						</p>
						<p className="text-xl">
							L'intérieur raffiné de la Cobra Shelby marie avec élégance confort
							et fonctionnalité. Les détails artisanaux et les finitions haut de
							gamme créent un habitacle qui séduit les amateurs de luxe tout en
							captivant les passionnés de conduite sportive.
						</p>
						<p className="text-xl">
							Que ce soit sur la piste ou sur la route ouverte, la Cobra Shelby
							continue de captiver les amateurs de voitures du monde entier.
							Symbole de performance légendaire et d'une esthétique inégalée, la
							Cobra Shelby reste une icône automobile qui transcende les
							époques, suscitant l'admiration de tous ceux qui la croisent.
							Bienvenue dans l'univers enivrant de la Cobra Shelby, où la
							passion pour la conduite rencontre l'élégance brute de la
							puissance automobile.
						</p>
					</div>
				</div>
			)}
		</section>
	);
};
