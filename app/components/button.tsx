import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { CSSProperties, ReactNode } from 'react';

type buttonProps = {
    name: string;
    variant?: 'contained' | 'outlined' | 'text';
    type: 'button' | 'submit' | 'reset';
    text: string;
    sx?: CSSProperties; //TODO 3 couleurs
    startIcon?: ReactNode;
    isLoading?: boolean;
    onClick?: ()=>void;
  };

  export default function ButtonComponent(props: buttonProps){
    const {
        name,
        variant,
        type,
        text,
        sx,
        startIcon,
        isLoading,
        onClick,
    } = props;

    return (
        <Button 
            className={name}
            variant={variant}
            sx={sx}
            type={type}
            startIcon={startIcon}
            onClick={onClick}
        >
            {isLoading ? <CircularProgress /> : text}
        </Button>
    )
  }