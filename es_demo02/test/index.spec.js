describe('hello test',() => {

    it('test example', () => {

    });

    it('chai example', () => {
        expect('hi').to.equal('hi');
    })

    it('test 3', ()=> {
        throw new Error('测试失败了！！！');
    });

})