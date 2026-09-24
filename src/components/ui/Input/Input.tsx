import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export function Input({
  label,
  error,
  helperText,
  leftElement,
  rightElement,
  id,
  ...props
}: InputProps) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={id} className="input-field__label">
          {label}
        </label>
      )}

      <div
        className={`input-field__wrapper ${
          error ? 'input-field__wrapper--error' : ''
        }`}
      >
        {leftElement && (
          <span className="input-field__element">
            {leftElement}
          </span>
        )}

        <input
          id={id}
          className="input-field__input"
          aria-invalid={Boolean(error)}
          {...props}
        />

        {rightElement && (
          <span className="input-field__element">
            {rightElement}
          </span>
        )}
      </div>

      {error ? (
        <span className="input-field__error">{error}</span>
      ) : helperText ? (
        <span className="input-field__helper">
          {helperText}
        </span>
      ) : null}
    </div>
  );
}