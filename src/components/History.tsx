import { data } from "@/utils/constants";
import { Card } from "./date-card";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export const History = () => {
	return (
		<section id="History" className="w-full h-auto flex flex-col items-center justify-center gap-10">
			<div className="pt-80 pb-24 w-[80%] h-full flex flex-col items-center justify-center gap-10 relative backdrop-blur-md">
				<span className="w-[1px] h-full text-8xl font-bold text-center bg-slate-600 rounded-full absolute top-0"></span>
				<div className="w-full flex flex-col items-center gap-48 relative overflow-hidden">
					{data.map((el) => {
						return (
							<motion.div
								key={el.id}
								variants={
									el.isLeft
										? slideIn("right", "tween", 0.35, 0.5)
										: slideIn("left", "tween", 0.35, 0.5)
								}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0.25 }}
							>
								<Card
									date={el.date}
									description={el.description}
									isLeft={el.isLeft}
									addClass={el.isLeft ? "ml-[600px]" : "mr-[600px]"}
								/>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
