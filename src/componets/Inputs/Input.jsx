import styled from "styled-components";

export const Input = (props) => {
  return (
    <div>
      <div>
        <label htmlFor={props.id}>{props.children}</label>
        <Inputs
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          className={props.className}
        />
      </div>
    </div>
  );
};
const Inputs = styled.input`
  width: 340px;
  height: 39px;
  border-radius: 8px;
  border: 0;
  display: flex;
  background-color: #0eb0f029;;
`;
