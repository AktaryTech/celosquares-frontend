export default function TheInput({ titleThing, nameThing, typeThing, defaultThing }) {
  return (
    <div className="labelAndInput">
      <label className="lbl" htmlFor={nameThing}>
        {titleThing}{" "}
      </label>
      <input
        className="inpt"
        id={nameThing}
        name={nameThing}
        type={typeThing}
        defaultValue={defaultThing}
        required
      />
    </div>
  );
}
