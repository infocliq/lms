import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Footer } from '../components/footer';

export const CreateLetters = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    }
    return (
        <>
            <div class="content">
                <div class="mb-9">
                    <div class="row g-3 mb-4">
                        <div class="col-auto">
                            <h3 class="mb-0">Assign new letter</h3>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xl-9">
                            <form class="row g-3 mb-6">
                                <div class="col-sm-6 col-md-8">
                                    <div class="form-floating">
                                        <input class="form-control" id="floatingInputGrid" type="text" placeholder="Subject" />
                                        <label for="floatingInputGrid">Subject</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <input class="form-control" id="floatingInputGrid" type="text" placeholder="From" />
                                        <label for="floatingInputGrid">From</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <input class="form-control" id="basic-form-dob" type="date" />
                                        <label for="floatingSelectPrivacy">Date</label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelectAssignees">
                                            <option selected="selected">Select... </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select><label for="floatingSelectAssignees">Department </label>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelectTeam">
                                            <option selected="selected">Low</option>
                                            <option value="1">Team One</option>
                                            <option value="2">Team Two</option>
                                            <option value="3">Team Three</option>
                                        </select>
                                        <label for="floatingSelectTeam">Priority </label></div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelectTeam">
                                            <option selected="selected">Select...</option>
                                            <option value="1">Team One</option>
                                            <option value="2">Team Two</option>
                                            <option value="3">Team Three</option>
                                        </select>
                                        <label for="floatingSelectTeam">Status </label></div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelectTeam">
                                            <option selected="selected">Select...</option>
                                            <option value="1">Team One</option>
                                            <option value="2">Team Two</option>
                                            <option value="3">Team Three</option>
                                        </select>
                                        <label for="floatingSelectTeam">Category </label></div>
                                </div>
                                <div class="col-sm-6 col-md-4">
                                    <div class="form-floating">
                                        <input class="form-control" id="floatingInputGrid" type="text" placeholder="Register post number" />
                                        <label for="floatingInputGrid">Register number</label>
                                    </div>
                                </div>


                                <div class="col-12 gy-6">
                                    <div class="form-floating">

                                        {/* <textarea class="tinymce" rows={3} name="content" data-tinymce="{}" id="mce_0" ></textarea> */}

                                        {/* <textarea class="form-control" id="floatingProjectOverview" placeholder="Leave a comment here"></textarea>
                                        <label for="floatingProjectOverview">project overview</label> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}

                                            init={{
                                                height: 300,
                                                menubar: false,
                                                plugins: [
                                                    'a11ychecker', 'image', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                                                    'lists', 'link', 'directionality', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                                    'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                                ],
                                                toolbar: 'undo redo | image | bold italic backcolor | ' +
                                                    'alignleft aligncenter alignright alignjustify |' + '',
                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}

                                        />
                                    </div>
                                </div>

                                <div class="col-12 gy-6">
                                    <div class="row g-3 justify-content-end">
                                        <div class="col-auto"><button class="btn btn-sm btn-phoenix-primary">Cancel</button></div>
                                        <div class="col-auto"><button class="btn btn-sm btn-primary">Assign letter</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
