import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Advice from './Advice';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Advice Component', () => {
    const renderComponent = () => (render(<Advice />));

    beforeEach(() => {
        mockedAxios.get.mockResolvedValueOnce({
            data: { slip: { advice: 'advice'}},
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
        });
    })

    test('renders the advice from the API', async () => {
        const { getByTestId } = renderComponent();

        await waitFor(() => {
            const advice = getByTestId('advice');
            expect(advice).toBeInTheDocument();
            expect(advice).toBeVisible();
            expect(advice).toHaveTextContent('advice');
        });
    });
})