import styled from 'styled-components';

export const TechStackCardComponent = ({ image, tech, description }) => {
    return (
        <StyledWrapper>
            <div className="card m-auto">
                <div className="bg">
                    <img className='w-full h-[100px]' src={image} alt={tech} />
                    <div className='p-2'>
                        <h2 className='text-3xl font-semibold'>{tech}</h2>
                        <p className='text-sm'>{description}</p>
                    </div>
                </div>
                <div className="blob"></div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    ;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }`;

