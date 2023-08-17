import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'removeSpaces'
})


export class RemoveSpacePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value.replace(/\s/g, "")
    }
}