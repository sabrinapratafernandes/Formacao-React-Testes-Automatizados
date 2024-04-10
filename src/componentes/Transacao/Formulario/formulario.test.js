import {render, screen} from '@testing-library/react';
import Formulario from './index'

test('Deve renderizar um campo de input', ()=>{
    render(<Formulario/>)
    const campoTexto = screen.getByPlaceholderText('Digite um valor')
    expect(campoTexto).toBeInTheDocument();
})

