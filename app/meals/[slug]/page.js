const IntoMealsPage = ({ params }) => {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Something Into Meals
      </h1>
      <p style={{textAlign: 'center', color: 'white'}}>{params.slug}</p>
    </>
  );
};

export default IntoMealsPage;
