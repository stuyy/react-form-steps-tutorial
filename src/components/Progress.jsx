import styled from 'styled-components';

export const ProgressCircle = styled.div`
  width: 25px;
  height: 25px;
  border: 3px solid white;
  border-radius: 50px;
`;

export const ProgressLabel = styled.div`
  color: white;
`;

export const ProgressLine = styled.div`
  height: 2px;
  width: 100px;
  background-color: white;
  @keyframes expandProgressLine {
    0% {
      width: 0px;
    }
    100% {
      width: 100px;
    }
  }
  animation: 1s expandProgressLine ease;
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Progress = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ProgressItem>
        <ProgressCircle />
        <ProgressLabel>Contact</ProgressLabel>
      </ProgressItem>
      <ProgressItem>
        <ProgressCircle />
        <ProgressLabel>Email</ProgressLabel>
      </ProgressItem>
      <ProgressItem>
        <ProgressCircle />
        <ProgressLabel>Mobile</ProgressLabel>
      </ProgressItem>
      <ProgressItem>
        <ProgressCircle />
        <ProgressLabel>Review</ProgressLabel>
      </ProgressItem>
    </div>
  );
};
