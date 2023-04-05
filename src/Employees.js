export default function Employee(props) {
  return (
    <>
      <div className="employee">
        <div>{props.id}</div>
        <div>
          {props.name} {props.lastName}
        </div>
      </div>
    </>
  );
}
