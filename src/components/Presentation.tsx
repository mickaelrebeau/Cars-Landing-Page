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
			className="mx-auto mb-24 w-[80%] h-auto flex items-center gap-8"
		>
			<motion.div
				className="p-8 w-full h-auto flex flex-col items-center justify-center gap-10 col-span-3 bg-black/50 rounded-lg"
				variants={fadeIn("", "", 0.1, 1)}
			>
				<motion.h2
					className="text-3xl font-bold"
					variants={textVariant(0.1)}
				>
					Révolution à Roues : La Saga de la Première Voiture à Moteur Thermique
					et Châssis de Karl Benz
				</motion.h2>
				<motion.p className="text-xl" variants={textVariant(0.2)}>
					Au tournant du XIXe siècle, l'histoire de l'automobile prenait un
					virage décisif avec la création de la première véritable voiture à
					moteur thermique et châssis. C'était une époque de visionnaires,
					d'innovateurs et d'esprits audacieux qui cherchaient à conquérir les
					routes avec une nouvelle forme de mobilité.
				</motion.p>
				<motion.p className="text-xl" variants={textVariant(0.3)}>
					L'année charnière fut 1886, lorsque Karl Benz, un ingénieur allemand,
					concrétisa ses rêves en créant la Benz Patent-Motorwagen. Cette
					révolution roulante était bien plus qu'une simple voiture ; elle
					symbolisait une avancée technologique majeure. Équipée d'un moteur à
					combustion interne alimenté à l'essence, la Benz Patent-Motorwagen
					disposait également d'un châssis métallique, rompant ainsi avec la
					tradition des véhicules à traction animale.
				</motion.p>
				<motion.p className="text-xl" variants={textVariant(0.4)}>
					Le moteur de Benz était un monocylindre de 954 cm³, générant une
					puissance de 0,75 cheval. Cette machine ingénieuse était dotée d'une
					transmission par chaîne et d'une direction à crémaillère, anticipant
					déjà certaines des caractéristiques fondamentales des voitures
					modernes. Sa première sortie publique en 1886 marque officiellement le
					début de l'ère automobile.
				</motion.p>
				<motion.p className="text-xl" variants={textVariant(0.5)}>
					Cette voiture novatrice avait une vitesse maximale de 16 km/h, ce qui
					peut sembler modeste aujourd'hui, mais à l'époque, cela représentait
					une prouesse impressionnante. La Benz Patent-Motorwagen ouvrait la
					voie à une révolution du transport, propulsant le monde dans une ère
					nouvelle où la mobilité individuelle prenait forme.
				</motion.p>
				<motion.p className="text-xl" variants={textVariant(0.6)}>
					L'héritage de cette première voiture à moteur thermique et châssis
					demeure palpable dans chaque véhicule moderne qui sillonne nos routes.
					L'ingéniosité de Karl Benz a tracé la voie à une évolution continue de
					l'automobile, inspirant des générations d'ingénieurs, de designers et
					d'amateurs de voitures vintage à travers les âges. Ainsi, la création
					de la Benz Patent-Motorwagen demeure un jalon indélébile dans
					l'histoire fascinante de l'automobile.
				</motion.p>
			</motion.div>
			<motion.div
				className="p-8 w-full h-auto col-span-2"
				variants={fadeIn("", "", 0.1, 1)}
			>
				<img src={benz} className="w-full h-auto object-cover rounded-md" />
			</motion.div>
		</motion.section>
	);
};
