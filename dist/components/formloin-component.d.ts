import { EventEmitter, OnInit } from '@angular/core';
export declare class FormloginComponent implements OnInit {
    data: any;
    textButton: string;
    dataUser: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    clickButton(): void;
}
