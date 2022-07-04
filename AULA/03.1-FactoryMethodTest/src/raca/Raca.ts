import IAnimal from './animal/interface/IAnimal'

export default abstract class CachorroRaca{
    protected abstract createAnimal() : IAnimal;

    startAnimal(){
        const Animal = this.createAnimal()
        Animal.setAnimal('Lola')
        console.log(Animal.getAnimal());
    }
}
