const Abouts = () => {
  return (
    <section className="w-screen mt-12">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl">Activities</h5>
        <p className="text-2xl uppercase font-light ">
          ImanEdu Institute of Technology
        </p>
        <p className="w-3/5 text-center text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          velit illum maiores assumenda. At sunt doloremque tempora,
          voluptatibus eos architecto corrupti itaque numquam praesentium
          aperiam ipsam minus quisquam enim atque!
        </p>
        <div className="flex justify-center items-center gap-6">
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://www.accurate.in/img/new/building.webp"
            alt=""
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://www.vt.edu/content/vt_edu/en/admissions/black-college-institute/_jcr_content/home-featured/vtcontainer_copy_cop_2019216154/vtcontainer-content/vtcta_copy_copy/adaptiveimage.transform/m-medium/image.jpg"
            alt=""
          />
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://ace.edu.np/wp-content/uploads/acebanner05.jpg"
            alt=""
          />
        </div>
        <button className="border-red-900 border-2 p-2 rounded-md">
          View More
        </button>
      </div>
    </section>
  );
};

export default Abouts;
