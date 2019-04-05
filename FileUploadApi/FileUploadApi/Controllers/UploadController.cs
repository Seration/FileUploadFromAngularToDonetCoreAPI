using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FileUploadApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost("FileUpload")]
        public async Task<IActionResult> FileUpload([FromForm] IFormFile uploadedFile)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (uploadedFile.Length > 0)
            {
                var filePath = Path.Combine("uploads/", uploadedFile.FileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await uploadedFile.CopyToAsync(fileStream);
                }
            }

            return Ok();
        }
    }
}