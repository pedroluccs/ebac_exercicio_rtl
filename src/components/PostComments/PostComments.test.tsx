import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir adicionar mais dois comentários', () => {
        render(<PostComment />);
    
    const input = screen.getByTestId('campo-comments');
    const addButton = screen.getByText('Comentar');

    fireEvent.change(input, { target: { value: 'Primeiro comentario'}});
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: 'Segundo comentario'}});
    fireEvent.click(addButton);


    const  comments = screen.getAllByRole('listitem')
    expect(comments).toHaveLength(2);
    expect(comments[0].textContent).toBe('Primeiro comentario')
    expect(comments[1].textContent).toBe('Segundo comentario')
        })

});