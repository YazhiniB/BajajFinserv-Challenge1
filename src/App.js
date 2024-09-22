import React, { useState } from 'react';
import { usePostDataMutation } from './app/api/apiSlice';
import { Input, Button, Select, Typography, Alert, Card, Space, message } from 'antd';
import { useTitle } from './hooks/useTitle';
import 'antd/dist/reset.css';

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

function App() {
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState(['Alphabets']);
    const [postData, { data: response, error, isLoading }] = usePostDataMutation();

    useTitle(response?.roll_number || 'XYZ App');

    const handleSubmit = async () => {
        try {
            message.destroy();
            const parsedData = JSON.parse(input);
            await postData(parsedData).unwrap();
        } catch (err) {
            message.error('Invalid JSON format. Please check your input.');
            console.error('Invalid JSON format:', err);
        }
    };

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const filteredResponse = {
        numbers: filter.includes('Numbers') ? response?.numbers : [],
        alphabets: filter.includes('Alphabets') ? response?.alphabets : [],
        highest_lowercase_alphabet: filter.includes('Highest lowercase alphabet') ? response?.highest_lowercase_alphabet : []
    };

    return (
        <div className="App" style={{ padding: '30px', backgroundColor: '#f5f5f5' }}>
            <Title level={2} style={{ color: '#1E90FF' }}>{response?.roll_number || 'Submit your JSON data'}</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
                <TextArea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Paste your JSON data here'
                    rows={4}
                    style={{ marginBottom: '15px', border: '2px solid #1E90FF' }}
                />
                <Button 
                    type="primary" 
                    onClick={handleSubmit} 
                    loading={isLoading}
                    style={{ backgroundColor: '#008080' }}
                >
                    Submit
                </Button>
                {error && (
                    <Alert 
                        message="Error" 
                        description={error.message || 'Something went wrong'} 
                        type="error" 
                        showIcon
                    />
                )}
                {response && (
                    <>
                        <Select 
                            mode="multiple" 
                            value={filter} 
                            onChange={handleFilterChange}
                            style={{ width: '100%', marginBottom: '15px' }}
                        >
                            <Option value="Alphabets">Alphabets</Option>
                            <Option value="Numbers">Numbers</Option>
                            <Option value="Highest lowercase alphabet">Highest lowercase alphabet</Option>
                        </Select>
                        <Card title="Filtered Output" style={{ width: '100%' }}>
                            {filter.includes('Numbers') && (
                                <Card type="inner" title="Numbers">
                                    <pre>{JSON.stringify(filteredResponse.numbers, null, 2)}</pre>
                                </Card>
                            )}
                            {filter.includes('Alphabets') && (
                                <Card type="inner" title="Alphabets">
                                    <pre>{JSON.stringify(filteredResponse.alphabets, null, 2)}</pre>
                                </Card>
                            )}
                            {filter.includes('Highest lowercase alphabet') && (
                                <Card type="inner" title="Highest Lowercase Alphabet">
                                    <pre>{JSON.stringify(filteredResponse.highest_lowercase_alphabet, null, 2)}</pre>
                                </Card>
                            )}
                        </Card>
                    </>
                )}
            </Space>
        </div>
    );
}

export default App;
