const FormContent = () => {
  return (
    <div className="flex flex-col w-2/3 ml-24 mt-8 gap-6">
      <div className="relative">
        <label className="absolute -top-3 left-3 bg-white px-2 text-sm font-bold capitalize">
          name
        </label>
        <input className="border-2 py-2 px-3 w-full capitalize font-bold text-gray-700" type="text" />
      </div>

      <div className="relative">
        <label className="absolute -top-3 left-3 bg-white px-2 text-sm font-bold capitalize">
          e-mail
        </label>
        <input className="border-2 py-2 px-3 w-full" type="email" />
      </div>

      <div className="relative">
        <label className="absolute -top-3 left-3 bg-white px-2 text-sm font-bold capitalize">
          text
        </label>
        <textarea className="border-2 py-2 px-3 w-full min-h-32"></textarea>
      </div>
      <div className="flex justify-end">
        <button className="bg-black text-white rounded active:scale-95 px-18 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormContent;
