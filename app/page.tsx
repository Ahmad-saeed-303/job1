"use client"

import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

export default function Form() {
  const [formData, setFormData] = useState({ name: '', age: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    try {
      const validatedData = schema.parse(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error.errors);
    }
  };

  return (
    <div className='form'>
      <form onSubmit={submit}>
        <label>
          Name:
        </label>
        <br />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <br />
        <label>
          Age:
        </label>
        <br />
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
          />
          <br />
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className='res'> 
          <p>Entered Name: {formData.name}</p>
          <p>Entered Age: {formData.age}</p>
        </div>
      )}
    </div>
  );
}
