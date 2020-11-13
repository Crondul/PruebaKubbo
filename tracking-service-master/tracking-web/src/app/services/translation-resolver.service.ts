import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsUrl } from '../configuration/Properties';
import { Observable } from 'rxjs';
import {Product} from "../model/product";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class TranslationResolverService {

    lang = 'en';

    constructor(
        private translateService: TranslateService
    ) {
    }

    async resolve() {
        this.translateService.setDefaultLang(this.lang);
    }

    public setLang(lang) {
        this.lang = lang;
        this.translateService.use(lang);
    }
}