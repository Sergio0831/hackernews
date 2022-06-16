import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_LINK } from '../mutations/CreateLink';

type NewLink = {
  description: string;
  url: string;
};

type LinkVariables = {
  description: string;
  url: string;
};

const CreateLink = () => {
  const [formState, setFormState] = useState<{
    description: string;
    url: string;
  }>({
    description: '',
    url: ''
  });
  const navigate = useNavigate();

  const [createLink] = useMutation<NewLink, LinkVariables>(CREATE_LINK, {
    variables: {
      description: formState.description,
      url: formState.url
    },
    onCompleted: () => navigate('/')
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createLink();
      }}
    >
      <div className='flex flex-column mt-3'>
        <input
          type='text'
          className='mb2'
          placeholder='A description for the link'
          value={formState.description}
          onChange={(e) =>
            setFormState({
              ...formState,
              description: e.target.value
            })
          }
        />
        <input
          type='text'
          className='mb2'
          placeholder='A URL for the link'
          value={formState.url}
          onChange={(e) =>
            setFormState({
              ...formState,
              url: e.target.value
            })
          }
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
export default CreateLink;
