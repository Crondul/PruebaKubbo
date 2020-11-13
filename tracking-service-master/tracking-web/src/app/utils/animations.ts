import {state, style, trigger, transition, animate} from "@angular/animations";

export const Animations = [
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(-180deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
    ]),

    trigger('fade', [
        state('shown', style({
            'opacity': '1', 'height': '*', 'padding-top': '*', 'padding-bottom': '*', 'overflow': 'hidden'
        })),
        state('hidden', style( {
            'opacity': '0', 'height': '0', 'padding-top': '0', 'padding-bottom': '0', 'overflow': 'hidden',
            'margin-top': '0', 'margin-bottom': '0'
        })),
        transition('hidden => shown', animate('300ms ease')),
        transition('shown => hidden', animate('300ms ease'))
    ])
];
