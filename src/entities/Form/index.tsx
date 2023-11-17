import { useForm, SubmitHandler } from "react-hook-form";
import { Button, lastLetterFunc, useStore } from "@shared";
import { observer } from "mobx-react-lite";

type Inputs = {
  inputText: string;
};

export const Form = observer(() => {
  const store = useStore();
  const { setNewCity, isYourAnswer, citiesList } = store.CityStore;

  const placeholder =
    citiesList.length === 0
      ? "Напишите любой город, например: Где вы живете?"
      : isYourAnswer
      ? `Знаете город на букву "${lastLetterFunc(
          citiesList[citiesList.length - 1].name!
        ).toUpperCase()}"?`
      : "Ожидаем ответ соперника...";

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
    if (!isYourAnswer) return;
    setNewCity({ name: data.inputText.trim(), isYourAnswer: true });
  };

  return (
    <div className="px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-12 w-auto rounded-lg px-2 bg-slate-100 flex justify-between items-center m-4"
      >
        <input
          {...register("inputText")}
          required={true}
          placeholder={placeholder}
          className="bg-slate-100 outline-none w-full"
          autoFocus={true}
        />

        <Button img="/images/icon.svg" />
      </form>
    </div>
  );
});
