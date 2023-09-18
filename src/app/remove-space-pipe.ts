import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'removeSpaces'
})


export class RemoveSpacePipe implements PipeTransform {
    transform(value: string) {
        return value.replace(/\s/g, "")
    }
}