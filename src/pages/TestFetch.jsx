// src/TestFetch.jsx
import React, { useEffect } from 'react';
import { supabase } from '../supabaseClient';

function TestFetch() {
  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase.from('questions').select('*');

      if (error) {
        console.error('❌ Error fetching data:', error.message);
      } else {
        console.log('✅ Questions from Supabase:', data);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Test Supabase Connection</h1>
      <p>Open your browser console to see the output 👇</p>
    </div>
  );
}

export default TestFetch;