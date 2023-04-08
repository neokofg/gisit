import { BigLabel } from "@/components/ui/label";
import Card from "./card";
const Why = () => {
  return (
    <div className="flex gap-10 mt-5 bg-white pt-11 px-[55px] pb-[62px] rounded-[40px]">
      <div className="flex flex-col items-start w-[429px]">
        <BigLabel type="sun">о продукте</BigLabel>
        <h1 className="text-slate-800 text-[96px] font-medium leading-[116px]">
          делаем все для вашего <span className="text-blue-500">удобства</span>
        </h1>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4">
          <Card number={1} title="Поиск">
            Практическая работа над проектами для портфолио и заданиями,
            приближенным и к реальным задачам разработчика
          </Card>
          <Card number={2} title="Консультация">
            Практическая работа над проектами для портфолио и заданиями,
            приближенным и к реальным задачам разработчика
          </Card>
        </div>
        <div className="flex gap-4">
          <Card number={3} title="Прогнозы от лучших">
            Практическая работа над проектами для портфолио и заданиями,
            приближенным и к реальным задачам разработчика
          </Card>
          <Card number={4} title="Практика">
            Практическая работа над проектами для портфолио и заданиями,
            приближенным и к реальным задачам разработчика
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Why;
