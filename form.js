class Form 
{
    constructor()
    {
        this.title = createElement('h1')

        this.name = createElement('h2')
        this.nameinput = createInput("")

        this.grade = createElement('h2')
        this.gradeinput = createInput("")

        this.number = createElement('h2')
        this.numberinput = createInput("")

        this.subject = createElement('h2')

        this.math = createElement('h2')
        this.mathinput = createInput("")

        this.pe = createElement('h2')
        this.peinput = createInput("")

        this.mark = createElement('h2')

        this.activites = createElement('h2')

        this.comment = createElement('h2')
        this.commentinput = createInput("")
        
        
    }
    display() {
        this.title.html("Report Card")
        this.title.position(600, 50)

        this.name.html ("Name: ")
        this.name.position(500,150)
        this.nameinput.position(600, 175)
        

        this.grade.html("Grade:")
        this.grade.position(500, 200)
        this.gradeinput.position(600, 225)

        this.number.html("Number:")
        this.number.position(500, 250)
        this.numberinput.position(600, 275)

        this.subject.html("Subject")
        this.subject.position(400, 300)

        this.math.html("Mathmatics")
        this.math.position(400, 325)
        this.mathinput.position(800,350)

        this.pe.html ("PE/PT")
        this.pe.position(400, 350)
        this.peinput.position(800,375)

        this.mark.html("Marks")
        this.mark.position(800, 300)

        this.activites.html("Activites")
        this.activites.position(400, 410)

        this.radio1 = createRadio('h2')
        this.radio1.option('A')
        this.radio1.option('B')
        this.radio1.option('C')
        this.radio1.position(800, 443)

        this.comment.html("Teachers Comments:")
        this.comment.position (400,460)
        this.commentinput.position(400, 520)
        this.commentinput.style('width','500px')
        this.commentinput.style('height', '50px')
        
    }
    
}