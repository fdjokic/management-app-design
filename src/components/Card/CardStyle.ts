import styled from "styled-components";

interface ICard {
  height?: string;
  isCompleted?: boolean;
  notDragged: boolean;
}
export const CardStyled = styled.div<ICard>`
  position: relative;
  overflow: hidden;
  opacity: ${(props) => (props.notDragged ? 0.5 : 1)};
  max-width: 260px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
  max-height: 114px;
  background-color: ${(props) =>
    props.isCompleted ? props.theme.completedCard : props.theme.cardColor};
  padding: 12px 12px;
  cursor: grab;

  section {
    height: 24px;
    display: flex;
  }
  b {
    width: 236px;
    display: flex;
    align-items: center;
    font-family: "SF Pro Display";
    font-size: 13px;
    font-weight: bold;
    line-height: 15px;
  }

  p {
    line-height: 18px;
    max-width: 236px;

    font-family: "SF Pro Display";
    font-size: 14px;
    letter-spacing: 0.3px;
  }
  border-radius: 6px;
  box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.2);
`;

interface IStatusBtn {
  background: string;
}
export const StatusBtn = styled.div<IStatusBtn>`
  width: 8px;
  height: 8px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ background }) => background};
`;
