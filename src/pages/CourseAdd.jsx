export default function CourseAdd() {
    return (
        <div className="course-add">
            <h1>Ajouter un article</h1>
            <div>
                <form>
                    <label htmlFor="course-nom">Nom: </label>
                    <br/>
                    <input type="text" name="course-name" id="course-name" />
                    <br/>
                    <label htmlFor="course-category">Categories: </label>
                    <br/>
                    <select name="course-category" id="course-category">
                        <option value="">Selectionner une categorie</option>
                        <option value="">Légumes</option>
                        <option value="">Entretient</option>
                        <option value="">Laitages</option>
                        <option value="">Fournitures diverses</option>
                    </select>
                    <br/>
                    <label htmlFor="course-description">Description: </label>
                    <br/>
                    <textarea name="course-description" id="course-description" cols="30" rows="10"></textarea>
                    <br/>
                    <input type="submit" value="ajouter un article" />
                </form>
            </div>
        </div>
    )
}
