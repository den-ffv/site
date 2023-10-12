function SliderItem({ id, level }) {
  const className = `item level${level}`;
  return (
    <div className={className} data-aos="fade-up" data-aos-duration="2000">
      <img src={id} alt="image" />
      {/* {id} */}
    </div>
  );
}
export default SliderItem;
