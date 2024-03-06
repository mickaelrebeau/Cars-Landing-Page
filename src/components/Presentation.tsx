import { benz } from "@/assets/images";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

export const Presentation = () => {
	return (
		<motion.section
			variants={staggerContainer(0.5, 0.5)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="Presentation"
			className="mx-auto mb-24 w-[80%] h-auto grid grid-cols-2 gap-8"
		>
			<motion.div
				className="p-8 w-full h-auto flex flex-col items-center justify-center gap-10 bg-black/50 rounded-lg font-raleway col-span-1"
				variants={fadeIn("", "", 0.1, 1)}
			>
				<motion.h2
					className="text-3xl font-bold font-amiri"
					variants={textVariant(0.1)}
				>
					Révolution à Roues : La Saga de la Première Voiture à Moteur Thermique
					et Châssis de Karl Benz
				</motion.h2>
				<motion.p className="text-xl" variants={textVariant(0.2)}>
					Au tournant du XIXe siècle, Karl Benz a révolutionné l'histoire de
					l'automobile en créant la première voiture à moteur thermique et
					châssis, la Benz Patent-Motorwagen, en 1886. Équipée d'un moteur à
					combustion interne, d'un châssis métallique, et avec des
					caractéristiques anticipant les voitures modernes, cette invention a
					marqué le début de l'ère automobile.
				</motion.p>
				<motion.p className="text-xl" variants={textVariant(0.3)}>
					Le monocylindre de 954 cm³ générant 0,75 cheval, la transmission par
					chaîne, et la direction à crémaillère ont contribué à sa notoriété.
					Malgré une vitesse maximale de 16 km/h à l'époque, la Benz
					Patent-Motorwagen a ouvert la voie à une révolution du transport,
					laissant un héritage palpable dans chaque voiture moderne et marquant
					un jalon indélébile dans l'histoire de l'automobile.
				</motion.p>
			</motion.div>
			<motion.div
				className="w-full h-full col-span-1"
				variants={fadeIn("", "", 0.1, 1)}
			>
				<img src={benz} className="w-full h-full object-cover rounded-md" />
			</motion.div>
		</motion.section>
	);
};
