"use client"
import React from 'react';
import { useTransition } from '@/app/TransitionContext'; // Path sahi karlena
import './PageTransition.css';

export default function PageTransition() {
    const { animationStep, transitionText } = useTransition();

    if (animationStep === 'idle') return null;

    return (
        <div className={`imprint-page-transition step-${animationStep}`}>
            <div className="transition-content">
                <h1 className="transition-text">{transitionText}</h1>
            </div>
        </div>
    );
}