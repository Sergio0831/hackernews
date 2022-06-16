import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  login: boolean;
  email: string;
  password: string;
  name: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<LoginFormProps>({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  return (
    <>
      <h4 className='mv3'>{formState.login ? 'Login' : 'Sign Up'}</h4>
      <div className='flex flex-column'>
        {!formState.login && (
          <input
            type='text'
            placeholder='Your Name'
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
          />
        )}
        <input
          type='text'
          placeholder='Your Email Address'
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
        />
        <input
          type='password'
          placeholder='Choose a safe password'
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
        />
      </div>
      <div className='flex mt-3'>
        <button
          className='pointer mr2 button'
          onClick={() => console.log('onClick')}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className='pointer button'
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account'
            : 'already have an account'}
        </button>
      </div>
    </>
  );
};
export default Login;
